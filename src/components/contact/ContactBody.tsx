import ContactForm from "../contact/ContactForm";

export default function ContactBody() {
  return (
    <>
      <div className="">
        <div>
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-[100px] sm:w-[130px] rounded-full justify-self-center bg-newBlue-200 mt-0"
          />
        </div>
        <div className="mt-10 mb-16 p-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
