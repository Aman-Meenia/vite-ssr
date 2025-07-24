import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  nameSchema,
  emailSchema,
  contactMessageSchema,
} from "@/lib/validations/common";

const contactUsSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: contactMessageSchema,
});

const ContactUsForm = () => {
  type contactUsFormType = z.infer<typeof contactUsSchema>;
  const form = useForm<contactUsFormType>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSumbit = async (values: contactUsFormType) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSumbit)}
          className="space-y-4 sm:space-y-6"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="h-10 sm:h-12 rounded-xl placeholder:text-[#8897AD] bg-[#F3F9FA] border-[1px] border-[#D4D7E3] focus:border-none focus-visible:ring-blue-400 focus-visible:ring-[2px] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="h-10 sm:h-12 rounded-xl placeholder:text-[#8897AD] bg-[#F3F9FA] border-[1px] border-[#D4D7E3] focus:border-none focus-visible:ring-blue-400 focus-visible:ring-[2px] focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="h-[300px] rounded-xl placeholder:text-[#8897AD] bg-[#F3F9FA] border-[1px] border-[#D4D7E3] focus:border-none focus-visible:ring-blue-400 focus-visible:ring-[2px] focus:outline-none "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className=" bg-gradient-to-r from-[#F82255] to-[#FE7C62]  w-full h-12 rounded-xl bg-[#FF4D6B] hover:bg-[#FF3355] text-white mt-8">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
