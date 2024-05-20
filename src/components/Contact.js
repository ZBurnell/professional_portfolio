import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
          <h1>
            Contact Me
          </h1>
          <p>
            Get in touch for all your custom application needs and or if you would like to work together on something together.
          </p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"/>
          </div>
      </div>
      </div>  
    </div>
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"/>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 flex items-center justify-left gap-x-6">
    <button type="submit" className="inline-flex border py-2 px-6 focus:outline-none rounded text-lg">Submit</button>
  </div>
</form>
    // <section id="contact" className="body-font">
    //   <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    //     <form
    //       netlify
    //       name="contact"
    //       className="text-center mb-20">
    //       <div className="relative mb-4">
    //         <label htmlFor="name" className="leading-7 text-sm">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 bg-gray-800 rounded border border-gray-700"
    //         />
    //       </div>
    //       <div className="relative mb-4">
    //         <label htmlFor="email" className="leading-7 text-sm text-gray-400">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 bg-gray-800 rounded border border-gray-700"
    //         />
    //       </div>
    //       <div className="relative mb-4">
    //         <label
    //           htmlFor="message"
    //           className="leading-7 text-sm text-gray-400">
    //           Message
    //         </label>
    //         <textarea
    //           id="message"
    //           name="message"
    //           className="grid grid-cols-4 gap-x-8 gap-y-6 sm:grid-cols-8 bg-gray-800 rounded border border-gray-700"
    //         />
    //       </div>
    //     </form>
    //   </div>
    //   <section id="footer">
    //       <div className="relative flex flex-wrap py-6 rounded shadow-md">
    //         <div className="lg:w-1/2 px-6">
    //           <h2 className="tracking-widest text-xs">
    //             Based out of
    //           </h2>
    //           <p className="mt-1">
    //             Dublin, Ohio
    //           </p>
    //         </div>
    //         <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
    //           <h2 className="title-font font-semibold text-white tracking-widest text-xs">
    //             EMAIL
    //           </h2>
    //           <a className="text-indigo-400 leading-relaxed">
    //             zackburnell922@gmail.com
    //           </a>
    //           <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
    //             PHONE
    //           </h2>
    //           <p className="leading-relaxed">614-425-6772</p>
    //         </div>
    //       </div>
    //   </section>
    // </section>
  );
}