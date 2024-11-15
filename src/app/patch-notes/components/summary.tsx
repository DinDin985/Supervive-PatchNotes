import Image from "next/image";

export default function Summary() {
  return (
    <div className="mb-10 w-10/12 max-w-[800px] space-y-4">
      <p>
        &#34; Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut sodales
        molestie tellus, ac laoreet metus placerat blandit.
      </p>

      <p>
        Vestibulum arcu lectus, dignissim in auctor at, mollis sed tortor.
        Vivamus vitae massa eget nisl finibus consequat. Quisque sed pretium
        magna. Phasellus vel risus ut ante fermentum tempor. Praesent sagittis
        leo facilisis nisl aliquet dignissim. Suspendisse dignissim faucibus
        ipsum, et venenatis turpis ultricies a. Ut blandit tortor non placerat
        venenatis. Donec ac tellus in massa dictum tempus. Etiam augue dui,
        mollis et viverra a, congue eu ligula. Suspendisse ut rhoncus augue.
        <br />
      </p>

      <p>
        Nam eleifend metus vitae leo vehicula, a congue nulla commodo. Mauris
        eget luctus nibh. Etiam pellentesque sem enim, et facilisis nisl
        convallis ac. Curabitur eu ipsum purus. Ut rhoncus volutpat velit, ut
        luctus sapien consequat ut. Vivamus justo quam, ultrices a massa sed,
        posuere hendrerit lacus. Mauris porttitor risus quam, nec dignissim
        magna finibus nec. &#34;
      </p>

      <div className="flex items-center">
        <p className="mr-2">- The Balance Team</p>
        <div className="w-fit rounded-full bg-white p-[6px]">
          <Image
            src={"/patch-notes/balance-team-icon.png"}
            width={15}
            height={15}
            alt="balance team icon"
          />
        </div>
      </div>
    </div>
  );
}
