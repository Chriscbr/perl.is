import React from 'react';

const quotes = [
  "One man's constant is another man's variable.",
	"Functions delay binding; data structures induce binding. Moral: Structure data late in the programming process.",
	"Syntactic sugar causes cancer of the semicolon.",
	"Every program is a part of some other program and rarely fits.",
	"If a program manipulates a large amount of data, it does so in a small number of ways.",
	"Symmetry is a complexity-reducing concept (co-routines include subroutines); seek it everywhere.",
	"It is easier to write an incorrect program than understand a correct one.",
	"A programming language is low level when its programs require attention to the irrelevant.",
	"It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.",
	"Get into a rut early: Do the same process the same way. Accumulate idioms. Standardize. The only difference(!) between Shakespeare and you was the size of his idiom list - not the size of his vocabulary.",
	"If you have a procedure with ten parameters, you probably missed some.",
	"Recursion is the root of computation since it trades description for time.",
	"If two people write exactly the same program, each should be put into microcode and then they certainly won't be the same.",
	"In the long run every program becomes rococo - then rubble.",
	"Everything should be built top-down, except the first time.",
	"Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't.",
	"If a listener nods his head when you're explaining your program, wake him up.",
	"A program without a loop and a structured variable isn't worth writing.",
	"A language that doesn't affect the way you think about programming, is not worth knowing.",
	"Wherever there is modularity there is the potential for misunderstanding: Hiding information implies a need to check communication.",
	"Optimization hinders evolution.",
	"A good system can't have a weak command language.",
	"To understand a program you must become both the machine and the program.",
	"Perhaps if we wrote programs from childhood on, as adults we'd be able to read them.",
	"One can only display complex information in the mind. Like seeing, movement or flow or alteration of view is more important than the static picture, no matter how lovely.",
	"There will always be things we wish to say in our programs that in all known languages can only be said poorly.",
	"Once you understand how to write a program get someone else to write it.",
	"Around computers it is difficult to find the correct unit of time to measure progress. Some cathedrals took a century to complete. Can you imagine the grandeur and scope of a program that would take as long?",
	"For systems, the analogue of a face-lift is to add to the control graph an edge that creates a cycle, not just an additional node.",
	"In programming, everything we do is a special case of something more general -- and often we know it too quickly.",
	"Simplicity does not precede complexity, but follows it.",
	"Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.",
	"The eleventh commandment was \"Thou Shalt Compute\" or \"Thou Shalt Not Compute\" - I forget which.",
	"The string is a stark data structure and everywhere it is passed there is much duplication of process. It is a perfect vehicle for hiding information.",
	"Everyone can be taught to sculpt: Michelangelo would have had to be taught not to. So it is with great programmers.",
	"The use of a program to prove the 4-color theorem will not change mathematics - it merely demonstrates that the theorem, a challenge for a century, is probably not important to mathematics.",
	"The most important computer is the one that rages in our skulls and ever seeks that satisfactory external emulator. The standarization of real computers would be a disaster - and so it probably won't happen.",
	"Structured Programming supports the law of the excluded middle.",
	"Re graphics: A picture is worth 10K words - but only those to describe the picture. Hardly any sets of 10K words can be adequately described with pictures.",
	"There are two ways to write error-free programs; only the third one works.",
	"Some programming languages manage to absorb change, but withstand progress.",
	"You can measure a programmer's perspective by noting his attitude on the continuing vitality of FORTRAN.",
	"In software systems, it is often the early bird that makes the worm.",
	"Sometimes I think the only universal in the computing field is the fetch-execute cycle.",
	"The goal of computation is the emulation of our synthetic abilities, not the understanding of our analytic ones.",
	"Like punning, programming is a play on words.",
	"As Will Rogers would have said, \"There is no such thing as a free variable.\"",
	"The best book on programming for the layman is \"Alice in Wonderland\"; but that's because it's the best book on anything for the layman.",
	"Giving up on assembly language was the apple in our Garden of Eden: Languages whose use squanders machine cycles are sinful. The LISP machine now permits LISP programmers to abandon bra and fig-leaf.",
	"When we understand knowledge-based systems, it will be as before -- except our fingertips will have been singed.",
	"Bringing computers into the home won't change either one, but may revitalize the corner saloon.",
	"Systems have sub-systems and sub-systems have sub- systems and so on ad infinitum - which is why we're always starting over.",
	"So many good ideas are never heard from again once they embark in a voyage on the semantic gulf.",
	"Beware of the Turing tar-pit in which everything is possible but nothing of interest is easy.",
	"A LISP programmer knows the value of everything, but the cost of nothing.",
	"Software is under a constant tension. Being symbolic it is arbitrarily perfectible; but also it is arbitrarily changeable.",
	"It is easier to change the specification to fit the program than vice versa.",
	"Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
	"In English every word can be verbed. Would that it were so in our programming languages.",
	"In seeking the unattainable, simplicity only gets in the way.",
	"In programming, as in everything else, to be in error is to be reborn.",
	"In computing, invariants are ephemeral.",
	"When we write programs that \"learn\", it turns out that we do and they don't.",
	"Often it is the means that justify the ends: Goals advance technique and technique survives even when goal structures crumble.",
	"Make no mistake about it: Computers process numbers - not symbols. We measure our understanding (and control) by the extent to which we can arithmetize an activity.",
	"Making something variable is easy. Controlling duration of constancy is the trick.",
	"Think of all the psychic energy expended in seeking a fundamental distinction between \"algorithm\" and \"program\".",
	"If we believe in data structures, we must believe in independent (hence simultaneous) processing. For why else would we collect items within a structure? Why do we tolerate languages that give us the one without the other?",
	"In a 5 year period we get one superb programming language. Only we can't control when the 5 year period will be.",
	"Over the centuries the Indians developed sign language for communicating phenomena of interest. Programmers from different tribes (FORTRAN, LISP, ALGOL, SNOBOL, etc.) could use one that doesn't require them to carry a blackboard on their ponies.",
	"Documentation is like term insurance: It satisfies because almost no one who subscribes to it depends on its benefits.",
	"An adequate bootstrap is a contradiction in terms.",
	"It is not a language's weakness but its strengths that control the gradient of its change: Alas, a language never escapes its embryonic sac.",
	"Is it possible that software is not like anything else, that it is meant to be discarded: that the whole point is to see it as a soap bubble?",
	"Because of its vitality, the computing field is always in desperate need of new cliches: Banality soothes our nerves.",
	"It is the user who should parameterize procedures, not their creators.",
	"The cybernetic exchange between man, computer and algorithm is like a game of musical chairs: The frantic search for balance always leaves one of the three standing ill at ease.",
	"If your computer speaks English, it was probably made in Japan.",
	"A year spent in artificial intelligence is enough to make one believe in God.",
	"Prolonged contact with the computer turns mathematicians into clerks and vice versa.",
	"In computing, turning the obvious into the useful is a living definition of the word \"frustration\".",
	"We are on the verge: Today our program proved Fermat's next-to-last theorem.",
	"What is the difference between a Turing machine and the modern computer? It's the same as that between Hillary's ascent of Everest and the establishment of a Hilton hotel on its peak.",
	"Motto for a research laboratory: What we work on today, others will first think of tomorrow.",
	"Though the Chinese should adore APL, it's FORTRAN they put their money on.",
	"We kid ourselves if we think that the ratio of procedure to data in an active data-base system can be made arbitrarily small or even kept small.",
	"We have the mini and the micro computer. In what semantic niche would the pico computer fall?",
	"It is not the computer's fault that Maxwell's equations are not adequate to design the electric motor.",
	"One does not learn computing by using a hand calculator, but one can forget arithmetic.",
	"Computation has made the tree flower.",
	"The computer reminds one of Lon Chaney -- it is the machine of a thousand faces.",
	"The computer is the ultimate polluter: its feces are indistinguishable from the food it produces.",
	"When someone says \"I want a programming language in which I need only say what I wish done,\" give him a lollipop.",
	"Interfaces keep things tidy, but don't accelerate growth: Functions do.",
	"Don't have good ideas if you aren't willing to be responsible for them.",
	"Computers don't introduce order anywhere as much as they expose opportunities.",
	"When a professor insists computer science is X but not Y, have compassion for his graduate students.",
	"In computing, the mean time to failure keeps getting shorter.",
	"In man-machine symbiosis, it is man who must adjust: The machines can't.",
	"We will never run out of things to program as long as there is a single program around.",
	"Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
	"One can't proceed from the informal to the formal by formal means.",
	"Purely applicative languages are poorly applicable.",
	"The proof of a system's value is its existence.",
	"You can't communicate complexity, only an awareness of it.",
	"It's difficult to extract sense from strings, but they're the only communication coin we can count on.",
	"The debate rages on: is PL/I Bachtrian or Dromedary?",
	"Whenever two programmers meet to criticize their programs, both are silent.",
	"Think of it! With VLSI we can pack 100 ENIACS in 1 sq. cm.",
	"Editing is a rewording activity.",
	"Why did the Roman Empire collapse? What is Latin for office automation?",
	"Computer Science is embarrassed by the computer.",
	"The only constructive theory connecting neuroscience and psychology will arise from the study of software.",
	"Within a computer natural language is unnatural.",
	"Most people find the concept of programming obvious, but the doing impossible.",
	"You think you know when you can learn, are more sure when you can write, even more when you can teach, but certain when you can program.",
	"It goes against the grain of modern education to teach children to program. What fun is there in making plans, acquiring discipline in organizing thoughts, devoting attention to detail and learning to be self-critical?",
	"If you can imagine a society in which the computer- robot is the only menial, you can imagine anything.",
	"Programming is an unnatural act.",
	"Adapting old programs to fit new machines usually means adapting new machines to behave like old ones.",
];

function App() {
  const [quote, setQuote] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('curl https://perl.is/api');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  React.useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl xl:max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 xl:mb-16">
          <a href="https://perl.is" className="hover:underline">perl.is</a>
        </h1>
        <div className="relative mb-8">
          <span className="absolute top-0 left-0 xl:text-9xl text-6xl text-gray-300 font-serif">&ldquo;</span>
          <p className="text-2xl xl:text-4xl font-serif text-gray-800 italic px-8 pt-6 xl:px-16 xl:pt-12">{quote}</p>
          <span className="absolute bottom-[-3rem] xl:bottom-[-5rem] right-0 xl:text-9xl text-6xl text-gray-300 font-serif">&rdquo;</span>
        </div>
        <p className="text-right text-xl xl:text-3xl text-gray-600 font-serif mt-4 mb-8 xl:mt-8 xl:mb-16">&mdash; Alan Perlis</p>
        <button
          onClick={getRandomQuote}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          New Quote
        </button>
        <div className="mt-10 max-w-sm mx-auto">
          <p className="text-sm text-gray-600 mb-2 text-left">Generate a random quote programmatically:</p>
          <div className="border border-gray-300 rounded p-2 flex items-center justify-between bg-gray-200">
            <p className="font-mono px-3 py-2 rounded">curl{" "}<a href="https://perl.is/api" className="text-blue-500 hover:underline">https://perl.is/api</a></p>
            <button
              onClick={copyToClipboard}
              className={`mr-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 ${copied ? 'text-green-500' : ''}`}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-lg">
        <p className="mb-2">Made by{" "}<a href="https://twitter.com/rybickic" className="text-blue-500 hover:underline">@rybickic</a></p>
        <a href="https://github.com/Chriscbr/perl.is">
          <img src="https://img.shields.io/github/stars/Chriscbr/perl.is?style=social" alt="Github Link" />
        </a>
      </div>
    </div>
  );
}

export default App;
