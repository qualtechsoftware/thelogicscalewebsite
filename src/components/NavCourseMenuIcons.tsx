/** Brand marks for course menu + contact. Size via CSS / width props. */

type IconProps = { size?: number; className?: string };

/** AWS orange cloud mark */
export function AwsCertMenuIcon({ size = 32 }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/aws-cloud.png"
      alt=""
      width={size}
      height={Math.round(size * 0.62)}
      className="courses-brand-aws"
      draggable={false}
    />
  );
}

/** Java coffee-cup mark */
export function JavaMenuIcon({ size = 26 }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/java.png"
      alt=""
      width={size}
      height={size}
      className="courses-brand-java"
      draggable={false}
    />
  );
}

/** Spring AI brain+leaf mark */
export function SpringAiMenuIcon({ size = 26 }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/spring-ai.png"
      alt=""
      width={size}
      height={size}
      className="courses-brand-spring-ai"
      draggable={false}
    />
  );
}

/** Spring Boot power hex mark */
export function SpringBootMenuIcon({ size = 26 }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/spring-boot.png"
      alt=""
      width={size}
      height={size}
      className="courses-brand-spring-boot"
      draggable={false}
    />
  );
}

/** @deprecated Prefer SpringAiMenuIcon */
export function AiMenuIcon(props: IconProps) {
  return <SpringAiMenuIcon {...props} />;
}

/** @deprecated Prefer SpringBootMenuIcon / JavaMenuIcon */
export function SpringMenuIcon(props: IconProps) {
  return <SpringBootMenuIcon {...props} />;
}

/** @deprecated Prefer SpringBootMenuIcon */
export function SpringStackMenuIcon(props: IconProps) {
  return <SpringBootMenuIcon {...props} />;
}
