import { Button } from "@/components/ui";
import GuestLayout from "@/layouts/guest-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-muted-foreground">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="flex items-center justify-between mt-4">
                    <Button disabled={processing}>
                        Resend Verification Email
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="text-sm rounded-md text-foreground hover:text-muted-foreground"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </>
    );
}

VerifyEmail.layout = (page: React.ReactNode) => {
    return (
        <GuestLayout
            title_header="Verify Email"
            description_header="Verify your email address."
            children={page}
        />
    );
};

