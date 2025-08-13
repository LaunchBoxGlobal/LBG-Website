import BlogAudioPlayer from "./BlogAudioPlayer";

const BlogAuthorDetails = ({
  author,
  date,
  readTime,
  plainText,
  numericReadTime,
}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-5 xl:gap-x-1 my-9">
        {author?.name && (
          <div className="flex items-center gap-2">
            <img
              src={author?.avatar_urls?.[96] || "/author-profile.jpg"}
              width={54}
              height={54}
              alt="author profile picture"
              className="rounded-full object-contain author-image"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">By:</p>
              <p className="text-sm xl:text-base font-bold text-gray-900 leading-none">
                {author?.name}
              </p>
            </div>
          </div>
        )}
        {date && (
          <div className="flex items-center gap-2">
            <img
              src={"/blog-calendar-image.png"}
              alt="blog-calendar-image"
              width={54}
              height={54}
              className="rounded-full author-image"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">Published Date:</p>
              <p className="text-sm xl:text-base font-bold text-gray-900">
                {formatDate(date)}
              </p>
            </div>
          </div>
        )}
        {readTime && (
          <div className="flex items-center gap-2">
            <img
              src={"/blog-estimated-read-time-image.png"}
              alt="blog testimated read time image"
              width={54}
              height={54}
              className="rounded-full author-image"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 leading-[1]">
                Estimated Read Time:
              </p>
              <p className="text-sm xl:text-base font-bold text-gray-900">
                {readTime} min
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6">
        <BlogAudioPlayer text={plainText} readTime={numericReadTime} />
      </div>
    </div>
  );
};

export default BlogAuthorDetails;
