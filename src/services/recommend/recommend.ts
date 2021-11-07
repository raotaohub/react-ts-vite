import instance, { get } from '../core/request'
import { IPresonalizedResult } from './type'

export const getBanner = () => {
  return get('/banner')
}

export const getRecommendList = () => {
  return get<IPresonalizedResult>('/personalized')
}

/* 推荐页专辑歌单 */
export const getRankTopList = () => {
  return get('/toplist/detail')
}
