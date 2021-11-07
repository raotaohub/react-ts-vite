export interface IPresonalizedResult {
  category: number
  code: number
  hasTaste: boolean
  result: {
    alg: string
    canDislike: boolean
    copywriter: unknown
    highQuality: boolean
    id: number
    name: string
    picUrl: string
    playCount: number
    trackCount: number
    trackNumberUpdateTime: number
    type: number
  }[]
}
