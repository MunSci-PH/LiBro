const LoginAnnouncements = () => {
  return (
    <div className="p-10 bg-gradient-to-br dark:from-green-800 dark:to-green-950 hidden lg:block min-w-lg max-w-xl rounded-lg">
      <h1 className="text-accent">MunSci LiBro&apos;s</h1>
      <h2 className="text-3xl font-extrabold">User Login</h2>
      <div className="divider"></div>
      <article>
        <p className="text-xl">Latest Updates:</p>
        <div className="p-2">
          <p className="prose">
            <h3>New Books Available</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia
            ipsa iste ex dolore maxime expedita.
          </p>
        </div>
        <div className="p-2">
          <p className="prose">
            <h3>2nd Announcement</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia
            ipsa iste ex dolore maxime expedita.
          </p>
        </div>
      </article>
    </div>
  );
};

export default LoginAnnouncements;
