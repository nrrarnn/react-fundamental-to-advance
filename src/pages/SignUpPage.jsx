import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpFromSchema = z.object({
  email: z.string().email("Format email belum sesuai"),
  username: z.string().min(4),
  password: z.string().min(8)
});

export const SignUpPage = () => {

  const form = useForm({
    defaultValues: {
      email : "",
      username: "",
      password: ""
    },
    resolver: zodResolver(signUpFromSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const registerUser = (data) => {
    alert("Data Submitted")
  }
  return(
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">
          Sign up
        </CardHeader>
        <Divider/>
        <CardBody className="flex flex-col gap-4 ">
          <form onSubmit={form.handleSubmit(registerUser)}>
            <Controller
              name="email"
              control={form.control}
              render= {({field, fieldState}) => {
                return  <Input 
                {...field} 
                type="email" 
                label="Email" 
                size="sm" 
                isInvalid={Boolean(fieldState.error)} 
                errorMessage={fieldState.error?.message}/>
              }}
            />
         
            <Controller
              name="username"
              control={form.control}
              render= {({field, fieldState}) => {
                return  <Input 
                {...field} 
                type="name" 
                label="Username" 
                size="sm" 
                isInvalid={Boolean(fieldState.error)} 
                errorMessage={fieldState.error?.message} />
              }}
            />
         
            <Controller
              name="password"
              control={form.control}
              render= {({field, fieldState}) => {
                return <Input 
                {...field} 
                type="password" 
                label="Password" 
                size="sm" 
                isInvalid={Boolean(fieldState.error)} 
                errorMessage={fieldState.error?.message} />
              }}
            />
         
          <Button type="submit" color="primary">Sign Up</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}