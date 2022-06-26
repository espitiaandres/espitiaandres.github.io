interface ILink {
  l: string;
}

const Link = ({ l }: ILink) => {
  return (
    <div className="flex flex-row space-x-2">
      <div>-</div>
      <a
        className="link link-hover hover:text-secondary break-words"
        href={l}
        target="_blank"
        rel="noopener noreferrer"
      >
        {l}
      </a>
    </div>
  );
};

export default Link;
