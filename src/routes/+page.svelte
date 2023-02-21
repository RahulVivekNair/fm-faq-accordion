<script>
  import Accordion from "../components/accordion.svelte";
</script>

<main
  class="min-h-screen bg-gradient-to-b from-softViolet to-softBlue flex justify-center items-center"
>
  <div
    class="flex items-center lg:flex-row flex-col max-w-screen-lg font-kumbh bg-white rounded-3xl mx-6 my-16"
  >
    <img
      class="hidden"
      src="images/illustration-box-desktop.svg"
      alt="box icon"
    />
    <div class="lg:w-1/2">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="images/illustration-woman-online-desktop.svg"
        />
        <img
          class=""
          src="images/illustration-woman-online-mobile.svg"
          alt=""
        />
      </picture>
    </div>
    <div class=" lg:w-1/2 pr-16 py-20">
      <h1 class="text-center text-3xl font-bold lg:text-left">FAQ</h1>
      <Accordion
        question="How many team members can I invite?"
        answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
      />
      <Accordion
        question="What is the maximum file upload size?"
        answer="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <Accordion
        question="How do I reset my password?"
        answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
      />
      <Accordion
        question="Can I cancel my subscription?"
        answer="Yes! Send us a message and we’ll process your request no questions asked."
      />
      <Accordion
        question="Do you provide additional support?"
        answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
      />
    </div>
  </div>
</main>
