import { setupENS } from '@nexis-network/domains-ui'
import { isENSReadyReactive } from '../reactiveVars'

let ens = {},
  registrar = {},
  ensRegistryAddress = undefined

export async function setup({
  reloadOnAccountsChange,
  enforceReadOnly,
  enforceReload,
  customProvider,
  customNetwork = {
    chainId: 2370,
    name: 'Nexis',
    ensAddress: '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87'
  },

  ensAddress = '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87'
}) {
  let option = {
    reloadOnAccountsChange: false,
    enforceReadonly: enforceReadOnly,
    enforceReload: enforceReload,
    customProvider: customProvider,
    customNetwork: customNetwork,
    ensAddress: ensAddress
  }
  try {
    const {
      ens: ensInstance,
      registrar: registrarInstance,
      providerObject
    } = await setupENS(option)

    ens = ensInstance
    registrar = registrarInstance
    ensRegistryAddress = ensAddress
    isENSReadyReactive(true)
    return { ens, registrar, providerObject }
  } catch (error) {
    console.log('encountered error===', error)
  }
}

export function getRegistrar() {
  return registrar
}

export function getEnsAddress() {
  return ensRegistryAddress
}

export default function getENS() {
  return ens
}
