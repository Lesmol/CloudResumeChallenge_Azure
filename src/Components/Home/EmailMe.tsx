function EmailMe() {
  return (
    <div className="flex items-center justify-center mt-8 text-primary md:hover:text-darker-primary transition 150 ease-out">
      <span className="text-xl">&#x2197;</span>
      <a
        href="mailto:molemilesedi@gmail.com"
        className="ml-2"
      >
        Email
      </a>
    </div>
  );
}

export default EmailMe;
