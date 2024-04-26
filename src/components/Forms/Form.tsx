import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type IDefaultValues = {
    defaultValues?: Record<string, any>;
};

type IFormType = {
    children?: ReactElement | ReactNode,
    submitHandler: SubmitHandler<any>;
} & IDefaultValues;

const Form = ({ children, submitHandler, defaultValues }: IFormType) => {
    const formConfig: IDefaultValues = {};
    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
    const methods = useForm<IFormType>(formConfig);
    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default Form;