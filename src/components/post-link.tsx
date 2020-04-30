import { Link } from "gatsby"
import tw from "twin.macro"

const PostLink = ({ title, slug, date, excerpt }) => (
  <div css={tw`mb-10`}>
    <h2 css={tw`mb-2 text-2xl`}>
      <Link css={tw`no-underline`} to={slug}>
        {title || slug}
      </Link>
    </h2>
    <small>{date}</small>
    <p>{excerpt}</p>
  </div>
)

export default PostLink
