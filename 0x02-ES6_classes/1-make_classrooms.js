import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRm = [];
  classRm.push(new ClassRoom(19));
  classRm.push(new ClassRoom(20));
  classRm.push(new ClassRoom(34));
  return classRm;
}
