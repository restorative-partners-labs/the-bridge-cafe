import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export function getClient(previewToken) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  })

  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts',
      })
    : client
}
