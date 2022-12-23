// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Menu Item documents */
interface MenuItemDocumentData {
    /**
     * image  field in *Menu Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * type field in *Menu Item*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: BREAKFAST
     * - **API ID Path**: menu_item.type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    type: prismicT.SelectField<"BREAKFAST" | "HOT LUNCH" | "COLD LUNCH" | "BAKED GOODS" | "SIDES", "filled">;
    /**
     * description field in *Menu Item*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * featured field in *Menu Item*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: menu_item.featured
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    featured: prismicT.BooleanField;
    /**
     * name field in *Menu Item*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
}
/**
 * Menu Item document from Prismic
 *
 * - **API ID**: `menu_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<MenuItemDocumentData>, "menu_item", Lang>;
export type AllDocumentTypes = MenuItemDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { MenuItemDocumentData, MenuItemDocument, AllDocumentTypes };
    }
}
