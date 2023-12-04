export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const resv = mathFunction();
    queue.push(resv);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
