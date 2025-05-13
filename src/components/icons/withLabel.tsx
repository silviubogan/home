export default function withLabel(
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
) {
  return function LabeledIcon({ label, ...props }: { label: string }) {
    return (
      <span style={{ display: "inline" }}>
        <Icon {...props} />
        &nbsp;
        {label}
      </span>
    );
  };
}
