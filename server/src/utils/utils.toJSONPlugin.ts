export function toJSONPlugin(schema: any) {
  schema.set("toJSON", {
    transform: (_doc: any, ret: any) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });
}
