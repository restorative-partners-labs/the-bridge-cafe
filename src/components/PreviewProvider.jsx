import { LiveQueryProvider } from '@sanity/preview-kit'
import { useMemo } from 'react'
import { getClient } from '../../sanity/lib/getClient'

export default function PreviewProvider({ children, previewToken }) {
  const client = useMemo(() => getClient(previewToken), [previewToken])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
