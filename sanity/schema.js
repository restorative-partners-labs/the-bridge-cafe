import { blockContent } from './schemas/blockContent'
import { teamMember } from './schemas/teamMember'
import { special } from './schemas/special'
import { specialMenu } from './schemas/specialMenu'
import { menuPhotos } from './schemas/menuPhotos'
import { siteSettings } from './schemas/siteSettings'

export const schema = {
  types: [
    siteSettings,
    teamMember,
    blockContent,
    special,
    specialMenu,
    menuPhotos,
  ],
}
