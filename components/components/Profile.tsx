import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface UserProfile {
  id: string;
  name: string;
  age: number;
}

export default function UserProfileApp() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    if (!name.trim() || !age.trim()) return;

    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name,
      age: parseInt(age),
    };

    setProfiles((prev) => [...prev, newProfile]);
    setName("");
    setAge("");
  };

  const handleUpdate = () => {
    if (!name.trim() || !age.trim()) return;

    setProfiles((prev) =>
      prev.map((p) =>
        p.id === editingId ? { ...p, name, age: parseInt(age) } : p
      )
    );

    setEditingId(null);
    setName("");
    setAge("");
  };

  const handleDelete = (id: string) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  const startEdit = (item: UserProfile) => {
    setName(item.name);
    setAge(item.age.toString());
    setEditingId(item.id);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#555"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter age"
        placeholderTextColor="#555"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={editingId ? handleUpdate : handleAdd}
      >
        <Text style={styles.buttonText}>
          {editingId ? "Update Profile" : "Add Profile"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              {item.name}, {item.age} years old
            </Text>

            <TouchableOpacity onPress={() => startEdit(item)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  editButton: {
    color: "blue",
    marginRight: 15,
    fontWeight: "600",
  },
  removeButton: {
    color: "red",
    fontWeight: "600",
  },
});
