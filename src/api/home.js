import Axios from 'axios'

export const getArticleList = async () => {
  const result = await Axios.get('https://api.github.com/repos/katherine0325/katherine0325.github.io/issues')
  return result.data
}
