import * as XMPP from 'stanza';
import { store } from '../../../modules/store';

import { setClient, setJid, setCredentials } from '../../../modules/chat/XmppMod';
// import { setClient, setJid, setCredentials } from '../redux/xmpp/xmpp.actions'


const createXmppClient = data => {
  let { user: local, password, jid } = data
  const domain = store.getState().xmpp.host
  jid = jid || XMPP.JID.create({ local, domain })

  const HOSTNAME = window ? window.location.hostname : domain

  console.log("creaetXmppClient->", HOSTNAME)
  const options = {
    transports: {
      websocket: `ws://${HOSTNAME}:5281/ws`,
      bosh: `http://${HOSTNAME}:5281/bosh`
    },
    allowResumption: true,
    useStreamManagement: true,
    resource: HOSTNAME,
    jid,
    password
  }
  const xmppClient = XMPP.createClient(options)

  xmppClient.on('session:started', async input => {
    store.dispatch(setJid(xmppClient.jid))
    store.dispatch(setCredentials(xmppClient.config.credentials.password))
    await xmppClient.getRoster()
    await xmppClient.sendPresence()
  })

  xmppClient.connect()
  store.dispatch(setClient(xmppClient))
  console.log("11111111111111->", xmppClient);
  return xmppClient
}

export default createXmppClient
