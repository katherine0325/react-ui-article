import Axios from 'axios'

export const getArticle = async (articleNumber) => {
  const result = await Axios.get(`https://api.github.com/repos/katherine0325/katherine0325.github.io/issues/${articleNumber}`)
  return result.data
}
