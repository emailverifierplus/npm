import 'dotenv/config';

const apiKey = process.env.RAPIDAPI_KEY;
if (!apiKey) {
    throw new Error('RAPIDAPI_KEY is not set in the environment variables');
}

import { checkEmailExists } from '../src/index';

describe('testing email verification', () => {
    test('response fields are present', async () => {
        const email = 'mark@apple.com';
        const res = await checkEmailExists(apiKey, email);
        expect(res.reachable).toBe("no");
        expect(res.free).toBe(false);
        expect(res.disposable).toBe(false);
        expect(res.role_account).toBe(false);
        expect(res.has_mx_records).toBe(true);

        expect(res.smtp.host_exists).toBe(true);
        expect(res.smtp.full_inbox).toBe(false);
        expect(res.smtp.catch_all).toBe(false);
        expect(res.smtp.deliverable).toBe(false);
        expect(res.smtp.disabled).toBe(false);
    });
});