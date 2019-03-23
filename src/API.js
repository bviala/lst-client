import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
  query($daysAgo: Int){
    posts(daysAgo: $daysAgo) {
      id
      name
      tagline
      comments_count
      votes_count
      makers {
        id
      }
      screenshot_url
    }
  }
`