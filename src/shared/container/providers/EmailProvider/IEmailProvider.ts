interface IEmailProvider {
    sendEmail(
        from: string,
        to: string | string[],
        subject: string,
        html: string
    ): Promise<void>

}

export { IEmailProvider }