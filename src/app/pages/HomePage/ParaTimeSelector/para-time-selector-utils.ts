import { ParaTimeSelectorStep } from './types'
import { GraphEndpoints, GraphEndpoint } from './Graph/types'

export abstract class ParaTimeSelectorUtils {
  static getIsGraphTransparent(step: ParaTimeSelectorStep) {
    return step !== ParaTimeSelectorStep.Explore
  }

  static showExploreBtn(step: ParaTimeSelectorStep) {
    return step === ParaTimeSelectorStep.EnableExplore
  }

  static showMobileHelpScreen(step: ParaTimeSelectorStep, isMobile: boolean) {
    if (!isMobile) {
      return false
    }

    return step === ParaTimeSelectorStep.ShowHelpScreen
  }

  static showZoomOutBtn(isMobile: boolean, endpoint?: GraphEndpoint) {
    if (isMobile) {
      return false
    }

    switch (endpoint) {
      case GraphEndpoints.Sapphire:
      case GraphEndpoints.Emerald:
      case GraphEndpoints.Cipher:
        return true
      default:
        return false
    }
  }
}
