from locust import HttpUser, TaskSet, task
from locust import LoadTestShape, constant_pacing
import time


class UserTasks(TaskSet):
    @task
    def my_task(self):
        curr_time = round(time.time()*1000)
        self.client.get(f'/?id={curr_time}')

class WebsiteUser(HttpUser):
    wait_time = constant_pacing(6)
    tasks = [UserTasks]
