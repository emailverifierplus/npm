export type EmailVerifierPlusResponse = {
    email: string;
    reachable: 'yes' | 'no';
    syntax: {
        username: string;
        domain: string;
        valid: boolean;
    };
    smtp: {
        host_exists: boolean;
        full_inbox: boolean;
        catch_all: boolean;
        deliverable: boolean;
        disabled: boolean;
    };
    gravatar: null | string;
    suggestion: string;
    disposable: boolean;
    role_account: boolean;
    free: boolean;
    has_mx_records: boolean;
};
export declare const checkEmailExists: (apiKey: string, email: string) => Promise<EmailVerifierPlusResponse>;
//# sourceMappingURL=main.d.ts.map