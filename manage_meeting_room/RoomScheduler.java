import java.util.EnumSet;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
class RoomScheduler {
    private Map<String, MeetingRoom> meetingRooms;

    public RoomScheduler() {
        meetingRooms = new HashMap<>();
    }

    // Method to add a new meeting room
    public void addMeetingRoom(MeetingRoom room) {
        meetingRooms.put(room.getRoomId(), room);
        System.out.println("Room added: " + room.getRoomName() + ", ID: " + room.getRoomId());
    }

    // Method to book a room
    public String bookRoom(String roomId, EnumSet<RoomFeature> requiredFeatures) {
        MeetingRoom room = meetingRooms.get(roomId);
        if (room != null && room.hasFeatures(requiredFeatures)) {
            return "Room " + roomId + " booked successfully.";
        } else {
            return "Room " + roomId + " does not meet the required features.";
        }
    }

    // Method to list available rooms based on required features
    public List<String> listAvailableRooms(EnumSet<RoomFeature> requiredFeatures) {
        List<String> availableRooms = new ArrayList<>();
        for (MeetingRoom room : meetingRooms.values()) {
            if (room.hasFeatures(requiredFeatures)) {
                availableRooms.add(room.getRoomName());
            }
        }
        return availableRooms;
    }
}
