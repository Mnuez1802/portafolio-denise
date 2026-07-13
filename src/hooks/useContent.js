import { useContext } from 'react'
import { ContentContext } from '../context/content-context'

export function useContent() {
  return useContext(ContentContext)
}
