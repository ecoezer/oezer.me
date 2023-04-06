import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <main className="Welcome" id="About">
      <br />
      <div className="Junior-Full-Stack-Developer xl:mt-20 2xl:mt-20 3xl:mt-20 4xl:mt-20">
        <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl">
          I&apos;m <strong>Emrah C. Oezer</strong>
          <br />
          <span className="italic">Jr. </span>&nbsp;Full-Stack Developer based
          in Germany.
        </p>
      </div>
      <div className="w-5/6 mx-auto flex justify-center mt-10 xl:mx-40 2xl:mx-40 3xl:w-2/6 4xl:w-2/6 ">
        <section className="mt-12 mb-8 px-2 lg:px-70 font-mono text-center text-xs xs:text-xs sm:text-sm md:text-sm lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 4xl:text-xl xl:mx-40 2xl:mx-40 3xl:mx-10 ">
          Welcome to my<br/>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 font-bold">
            Full-Stack Web Development
          </span>{" "}
          portfolio,
          <br />
          where you can see examples of my skills in developing
          responsive web applications.<br /><br />
          Being a full-stack developer is not about knowing everything, but
          about continuously learning and improving. I&apos;m passionate about coding
          and committed to improving my skills through practice and hands-on
          experience with a positive attitude and a willingness to learn.
        </section>
      </div>
    </main>
  );
};

export default Welcome;
