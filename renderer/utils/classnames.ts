const classnames = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(" ");

export default classnames;
