export enum ReleaseState {
  RELEASED = 'RELEASED', // Released during a previous patch.
  NEW = 'NEW', // Releasing during current patch.
  UPCOMING = 'UPCOMING', // Coming next patch but added to the site.
  UNKNOWN = 'UNKNOWN', // Unknown release state.
}
