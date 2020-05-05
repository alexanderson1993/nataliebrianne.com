import { Link } from "gatsby"
import tw from "twin.macro"

const PostLink = ({ title, slug, date, excerpt, span = 6 }) => (
  <Link
    css={[
      tw`block no-underline p-4 flex flex-col justify-end`,
      span === 6
        ? tw`col-span-6 h-64 bg-gray-800`
        : tw`col-span-4 h-56 bg-gray-800`,
    ]}
    to={slug}
  >
    <h2 css={tw`text-2xl`}>{title || slug}</h2>
    <small>{date}</small>
    <p>{excerpt}</p>
  </Link>
)

export default PostLink
