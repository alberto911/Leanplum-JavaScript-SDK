import LeanplumRequest from '../../src/LeanplumRequest'
import PushManager from '../../src/PushManager'
import VarCache from '../../src/VarCache'

export const lpRequestMock: Partial<jest.Mocked<LeanplumRequest>> = {
  getLastResponse: jest.fn(),
  isResponseSuccess: jest.fn().mockImplementation((response) => Boolean(response?.success)),
  request: jest.fn()
}

export const pushManagerMock: Partial<jest.Mocked<PushManager>> = {
  isWebPushSubscribed: jest.fn(),
  isWebPushSupported: jest.fn(),
  register: jest.fn(),
  subscribeUser: jest.fn(),
  unsubscribeUser: jest.fn()
}

export const varCacheMock: Partial<jest.Mocked<VarCache>> = {
  applyDiffs: jest.fn(),
  loadDiffs: jest.fn(),
  getVariable: jest.fn(),
  getVariables: jest.fn(),
  setVariables: jest.fn(),
  getVariantDebugInfo: jest.fn(),
  setVariantDebugInfo: jest.fn(),
  addVariablesChangedHandler: jest.fn(),
  removeVariablesChangedHandler: jest.fn(),
  clearUserContent: jest.fn(),
}