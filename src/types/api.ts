/**
 * Using types instead of interfaces because we don't need the interface extend feature here
 */

export type LogoProps = {
    alternativeText: string
    url: string
}

export type LandingPageProps = {
    logo: LogoProps
}