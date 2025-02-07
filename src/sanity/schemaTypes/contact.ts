import {Rule} from '@sanity/types';
const contactFormSchema =  {
    name: 'contactForm',
    title: 'Contact Form',
    type: 'document',
    fields: [
      {
        name: 'firstName',  
        title: 'First Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string'
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'zipCode',
        title: 'Zip Code',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(4).max(10)
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().regex(/^\+?\d{7,15}$/, {
          name: 'phone number', 
          invert: false
        })
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().email()
      },
      {
        name: 'additionalInfo',
        title: 'Additional Information',
        type: 'text'
      }
    ]
  };
  export default contactFormSchema;