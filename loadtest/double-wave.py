import math
from locust import HttpUser, TaskSet, task, constant
from locust import LoadTestShape
import uuid

class UserTasks(TaskSet):
    @task
    def my_task(self):
       id = uuid.uuid4()
       self.client.get(f'/?id={id}')

class WebsiteUser(HttpUser):
    wait_time = constant(1)
    tasks = [UserTasks]


class DoubleWave(LoadTestShape):

    min_users = 10
    peak_one_users = 20
    peak_two_users = 40
    time_limit = 600

    def tick(self):
        run_time = round(self.get_run_time())

        if run_time < self.time_limit:
            user_count = (
                (self.peak_one_users - self.min_users)
                * math.e ** -(((run_time / (self.time_limit / 10 * 2 / 3)) - 5) ** 2)
                + (self.peak_two_users - self.min_users)
                * math.e ** -(((run_time / (self.time_limit / 10 * 2 / 3)) - 10) ** 2)
                + self.min_users
            )
            return (round(user_count), round(user_count))
        else:
            return None