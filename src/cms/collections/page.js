import seo from '../partials/seo'

export default ({ label, file, templateKey, pageSlug, additionalFields }) => {
  const optionalFields = {
    longBiography_MD: {
      label: 'Full Biography',
      name: 'longBiography_MD',
      widget: 'markdown',
      required: true,
      hint: 'The long version of your professional biography.',
    },
    shortBiography: {
      label: 'Short Biography',
      name: 'shortBiography',
      widget: 'text',
      required: true,
      hint: 'The 1-2 sentence version of your biography.',
    },
    missionStatement: {
      label: 'Mission Statement',
      name: 'missionStatement',
      widget: 'text',
      required: true,
      hint: 'Your personalized mission statement, 1-2 sentences max.',
    },
    formText: {
      label: 'Contact Form Labels',
      name: 'formText',
      widget: 'object',
      required: true,
      hint: 'The text you want to appear for each section of your contact form.',
      fields: [
        {
          label: 'Sender Name',
          name: 'name',
          widget: 'string',
          required: true,
        },
        {
          label: 'Sender Email Address',
          name: 'email',
          widget: 'string',
          required: true,
        },
        {
          label: 'Message Area',
          name: 'message',
          widget: 'string',
          required: true,
        },
        {
          label: 'Submit Button Text',
          name: 'submit',
          widget: 'string',
          required: true,
        },
      ],
    },
    learnMoreButton: {
      label: 'Learn More Button',
      name: 'learnMoreButton',
      widget: 'object',
      required: true,
      hint: 'The text and link for the button on the home page',
      fields: [
        {
          label: 'Button Text',
          name: 'label',
          widget: 'string',
          required: true,
        },
        {
          label: 'Button Link',
          name: 'link',
          required: true,
          widget: 'relation',
          collection: 'pages',
          searchFields: ['pageSlug'],
          valueField: 'pageSlug',
        },
      ],
    },
    profileButton: {
      label: 'Profile Button',
      name: 'profileButton',
      widget: 'object',
      required: true,
      hint: 'The text and link for the button on the page',
      fields: [
        {
          label: 'Button Text',
          name: 'label',
          widget: 'string',
          required: true,
        },
        {
          label: 'Button Link',
          name: 'link',
          required: true,
          widget: 'relation',
          collection: 'pages',
          searchFields: ['pageSlug'],
          valueField: 'pageSlug',
        },
      ],
    },
    blogButton: {
      label: 'Blog Button',
      name: 'blogButton',
      widget: 'object',
      required: true,
      hint: 'The text and link for the button on the page',
      fields: [
        {
          label: 'Button Text',
          name: 'label',
          widget: 'string',
          required: true,
        },
        {
          label: 'Button Link',
          name: 'link',
          required: true,
          widget: 'relation',
          collection: 'pages',
          searchFields: ['pageSlug'],
          valueField: 'pageSlug',
        },
      ],
    },
    extraContent: {
      label: 'Extra Content',
      name: 'extraContent',
      widget: 'markdown',
      required: false,
      hint: 'Any additional content you want to place at the bottom of the page.',
    },
    pageContent: {
      label: 'Page Content',
      name: 'body',
      widget: 'markdown',
      required: true,
      hint: 'Main content you want to place at the home & profile page.',
    },
    connectWithMe: {
      label: 'Connect With Me Text',
      name: 'connectWithMe',
      widget: 'string',
      required: true,
      hint: 'Connect with me text of the profile page.',
    },
    discoverConnectExplore: {
      label: 'Discover, Connect and Explore Text',
      name: 'discoverConnectExplore',
      widget: 'string',
      required: true,
      hint: 'Discover, Connect and Explore test of the profile page.',
    },
    showRecentPosts: {
      label: 'Show the 4 most recent blog posts at the bottom of the page?',
      name: 'showRecentPosts',
      widget: 'boolean',
      default: false,
    },
  }

  const others = !additionalFields ? [] : additionalFields.map((name) => optionalFields[name])

  return {
    file,
    name: templateKey,
    label,
    identifier_field: 'header',
    fields: [
      {
        label: 'Template Key',
        name: 'templateKey',
        widget: 'hidden',
        default: templateKey,
      },
      {
        label: 'Page Slug',
        name: 'pageSlug',
        widget: 'hidden',
        default: pageSlug,
      },
      ...seo,
      {
        label: 'Schema Page Type',
        name: 'schemaType',
        widget: 'select',
        required: true,
        default: 'WebPage',
        hint: 'The type of the page',
        options: ['WebPage', 'ProfilePage'],
      },
      ...(templateKey !== 'index-page' ? [{
        label: 'Header',
        name: 'header',
        widget: 'string',
        required: true,
        hint: 'The text shown on the banner.',
      }] : []),
      // {
      //   label: 'Subheader',
      //   name: 'subheader',
      //   widget: 'string',
      //   required: false,
      //   hint: 'Optionally, text under the header.',
      // },
      {
        label: 'Featured Image',
        name: 'featuredImage',
        widget: 'object',
        hint: 'The primary image of this page, which is also used if people share the page on social media. If you do not choose an image, the default image set in the Site Data page will be used.',
        required: false,
        fields: [
          {
            label: 'Image File',
            name: 'src',
            widget: 'image',
            required: false,
          },
          {
            label: 'Alt Text',
            name: 'alt',
            widget: 'string',
            hint: "Describe what is shown in the image. This description is very important for SEO, don't leave it blank.",
            required: false,
          },
          // {
          //   label: 'Caption',
          //   name: 'caption',
          //   wiget: 'string',
          //   hint: 'Optionally, provide a caption for this image.',
          //   required: false,
          // },
        ],
      },
      ...others,
    ],
  }
}
