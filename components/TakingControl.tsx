export default function TakingControl() {
  return (
    <section className="w-full bg-[#F9EFE8] mt-12 px-6 py-10 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-t-[36px] w-full max-w-[605px] h-[507px] p-4 shadow-lg mx-auto">
          <img
            src="/taking-control.png"
            alt="Taking Control"
            className="w-full h-full object-cover rounded-t-[36px]"
          />
        </div>
        <div className="space-y-6 p-2">
          <div className="text-[#011A32] font-normal text-[24px] font-inter">
            - Taking Control
          </div>

          <div className="bg-[#A43E05] text-white font-inter font-medium text-[24px] rounded-[24px] w-full max-w-[600px] h-[134px] flex items-center justify-center px-6 relative custom-rotated-shadow shadow-lg transform -skew-y-3">
            Offering fast, private support to help you take back control from online harassment.
          </div>

          <div className="font-inter font-normal text-[18px] mt-2 w-full max-w-[600px] tracking-normal">
            <p>
              If someone has shared or threatened to share your intimate images, 
              you're not alone. This is a private, secure space built with your safety 
              in mind.
            </p>
            <br />
            <p>
              We work with or without legal action, at your pace, to help you protect yourself, 
              take down harmful content, and feel supported every step of the way.
            </p>
            <br />
            <p>
              You are in control. We’re here to support you; without judgment, pressure, or delay.       
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
