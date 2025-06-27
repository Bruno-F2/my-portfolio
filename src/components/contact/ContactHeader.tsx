import { X } from "lucide-react";

export default function ContactHeader() {
  return (
    <>
      <div className="flex justify-between">
        <div className="p-2 z-50">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="p-4 w-24 md:w-36" />
          </a>
        </div>
        <div className="flex justify-center items-center mr-8">
          <a href="/">
            <X className="text-newBlue-200" size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
