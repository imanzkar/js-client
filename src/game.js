import axios from "axios";
export class Game {
  constructor(token, server_ip, server_port) {
    this.token = token;
    this.server_ip = server_ip;
    this.server_port = server_port;
    this.ax = axios.create({
      baseURL: `http://${this.server_ip}:${this.server_port}/`,
      headers: { "x-access-token": token },
    });
  }

  async get_owners() {
    try {
      const res = await this.ax.get("get_owners");
      return res.data;
    } catch (err) {
      // console.log("error in get_owners :", err?.response?.data);
      throw err?.response?.data;
    }
  }

  async get_number_of_troops() {
    try {
      const res = await this.ax.get("get_troops_count");
      return res.data;
    } catch (err) {
      // console.log("error in get_number_of_troops :", err?.response?.data);
      throw err?.response?.data;
    }
  }

  async get_state() {
    try {
      const res = await this.ax.get("get_state");
      return res.data;
    } catch (err) {
      // console.log("error in get_state :", err?.response?.data);
      throw err?.response?.data;
    }
  }

  async get_turn_number() {
    try {
      const res = await this.ax.get("get_turn_number");
      return res.data;
    } catch (err) {
      // console.log("error in get_turn_number :", err?.response?.data);
      throw err?.response?.data;
    }
  }

  async get_adj() {
    try {
      const res = await this.ax.get("get_adj");
      return res.data;
    } catch (err) {
      // console.log("error in get_adj :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async next_state() {
    try {
      const res = await this.ax.get("next_state");
      return res.data;
    } catch (err) {
      // console.log("error in next_state :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async put_one_troop(node_id) {
    try {
      const body = {
        node_id,
      };
      const res = await this.ax.post("put_one_troop", body);
      return res.data;
    } catch (err) {
      // console.log("error in put_one_troop :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async put_troop(node_id, num) {
    try {
      const body = {
        node_id,
        number_of_troops: num,
      };
      const res = await this.ax.post("put_troop", body);
      return res.data;
    } catch (err) {
      // console.log("error in put_troop :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async get_player_id() {
    try {
      const res = await this.ax.get("get_player_id");
      return res.data;
    } catch (err) {
      // console.log("error in get_player_id :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async attack(attacking_id, target_id, fraction) {
    try {
      const body = {
        attacking_id,
        target_id,
        fraction,
      };
      const res = await this.ax.post("attack", body);
      return res.data;
    } catch (err) {
      // console.log("error in attack :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async move_troop(source, destination, troop_count) {
    try {
      const body = {
        source,
        destination,
        troop_count,
      };
      const res = await this.ax.post("move_troop", body);
      return res.data;
    } catch (err) {
      // console.log("error in move_troop :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async get_strategic_nodes() {
    try {
      const res = await this.ax.get("get_strategic_nodes");
      return res.data;
    } catch (err) {
      // console.log("error in get_strategic_nodes :", err?.response?.data);
      throw err?.response?.data;
    }
  }
  async get_number_of_troops_to_put() {
    try {
      const res = await this.ax.get("get_number_of_troops_to_put");
      return res.data;
    } catch (err) {
      /* console.log(
        "error in get_number_of_troops_to_put :",
        err?.response?.data
      );*/
      throw err?.response?.data;
    }
  }
  async get_reachable(node_id) {
    try {
      body = {
        node_id,
      };
      const res = await this.ax.post("get_reachable", body);
      return res.data;
    } catch (err) {
      // console.log("error in get_reachable :", err?.response?.data);
      console.log("error in get_owners :", err?.response?.data);
      throw err?.response?.data;
    }
  }
}
