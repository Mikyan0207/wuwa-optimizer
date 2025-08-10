import type { ScannerError, ScanResult } from '~/Core/Scanner/ScannerTypes'
import { ScannerResultStatus, ScannerStatus } from '~/Core/Scanner/ScannerTypes'

export function useScannerState() {
  const CurrentStatus = ref<ScannerStatus>(ScannerStatus.IDLE)
  const CurrentResult = ref<ScannerResultStatus | null>(null)
  const CurrentError = ref<ScannerError | null>(null)
  const Progress = ref<number>(0)

  function SetStatus(status: ScannerStatus) {
    CurrentStatus.value = status
  }

  function SetResult(result: ScannerResultStatus) {
    CurrentResult.value = result
  }

  function SetError(error: ScannerError) {
    CurrentError.value = error
    SetResult(ScannerResultStatus.ERROR)
  }

  function SetProgress(progress: number) {
    Progress.value = Math.max(0, Math.min(100, progress))
  }

  function Reset() {
    CurrentStatus.value = ScannerStatus.IDLE
    CurrentResult.value = null
    CurrentError.value = null
    Progress.value = 0
  }

  function StartLoading() {
    SetStatus(ScannerStatus.LOADING)
    SetProgress(0)
  }

  function SetReady() {
    SetStatus(ScannerStatus.READY)
    SetProgress(100)
  }

  function CompleteScan(result: ScanResult) {
    SetStatus(ScannerStatus.DONE)
    SetResult(result.status)

    if (result.error) {
      // eslint-disable-next-line unicorn/throw-new-error
      SetError(result.error)
    }

    SetProgress(100)
  }

  function UpdateProgress(progress: number) {
    if (CurrentStatus.value === ScannerStatus.LOADING) {
      SetProgress(progress)
    }
  }

  function CancelScan() {
    if (CurrentStatus.value === ScannerStatus.LOADING) {
      SetStatus(ScannerStatus.IDLE)
      // eslint-disable-next-line unicorn/throw-new-error
      SetError({
        type: ScannerResultStatus.ERROR,
        message: 'Scan annulé par l\'utilisateur',
        timestamp: new Date(),
      })
    }
  }

  return {
    CurrentStatus: readonly(CurrentStatus),
    CurrentResult: readonly(CurrentResult),
    CurrentError: readonly(CurrentError),
    Progress: readonly(Progress),
    SetStatus,
    SetResult,
    SetError,
    SetProgress,
    UpdateProgress,
    Reset,
    StartLoading,
    SetReady,
    CompleteScan,
    CancelScan,
  }
}
