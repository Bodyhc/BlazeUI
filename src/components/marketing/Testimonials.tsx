const testimonials = [
  {
    body: "BlazeUI has been a game-changer for our development workflow. The components are beautiful, easy to use, and saved us countless hours of work.",
    author: {
      name: "Jane Doe",
      handle: "CEO of Acme Inc.",
      imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
  },
  {
    body: "I love the attention to detail in BlazeUI. The components are not only functional but also aesthetically pleasing. Highly recommended!",
    author: {
      name: "John Smith",
      handle: "Frontend Developer",
      imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    },
  },
    {
    body: "The dark mode is just stunning. It's clear that a lot of thought went into the design and usability of this component library.",
    author: {
      name: "Peter Jones",
      handle: "Designer",
      imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Loved by developers and designers alike.
          </p>
        </div>
        <div className="mt-20 grid max-w-lg gap-x-8 gap-y-12 sm:max-w-none sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author.handle} className="flex flex-col">
                <blockquote className="text-lg font-semibold leading-8 tracking-tight text-foreground">
                    <p>“{testimonial.body}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                        <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                        <div className="text-muted-foreground">{testimonial.author.handle}</div>
                    </div>
                </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
